package com.piczio.userservice.config;


import com.piczio.userservice.auth.service.Oauth2ServiceImpl;
import lombok.AllArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserService;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import static com.piczio.userservice.user.entity.Permission.*;
import static com.piczio.userservice.user.entity.Role.ADMIN;

@Configuration
@AllArgsConstructor
@EnableWebSecurity
public class SecurityConfiguration {


    private final JwtAuthenticationFilter jwtAuthenticationFilter;

    private final AuthenticationProvider authenticationProvider;

    private final LogoutService logoutService;

    @Bean
    public OAuth2UserService<OAuth2UserRequest, OAuth2User> OAuth2UserService() {
        return new Oauth2ServiceImpl();
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf().disable()
                .authorizeRequests()
                .antMatchers(
                        "/swagger-ui/**",
                        "/api-docs/**",
                        "/actuator/**",
                        "/api/v1/auth/**",
                        "/api/v1/oauth2/**"
                ).permitAll()
                .antMatchers("/api/v1/management/**").hasRole(ADMIN.name())
                .antMatchers(HttpMethod.GET, "/api/v1/management/**").hasAuthority(ADMIN_READ.name())
                .antMatchers(HttpMethod.POST, "/api/v1/management/**").hasAuthority(ADMIN_CREATE.name())
                .antMatchers(HttpMethod.PUT, "/api/v1/management/**").hasAuthority(ADMIN_UPDATE.name())
                .antMatchers(HttpMethod.DELETE, "/api/v1/management/**").hasAuthority(ADMIN_DELETE.name())
                .anyRequest().authenticated()
                .and()
                .oauth2Login()
                    .userInfoEndpoint()
                            .userService(OAuth2UserService())
                        .and()
                        .defaultSuccessUrl("/api/v1/oauth2/success", true)
                        .failureUrl("/api/v1/oauth2/failed")
                .and()
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.IF_REQUIRED)
                .and()
                .authenticationProvider(authenticationProvider)
                .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class)
                .logout()
                .logoutUrl("/api/v1/auth/logout")
                .addLogoutHandler(logoutService)
                .logoutSuccessHandler((request, response, authentication) -> response.setStatus(HttpStatus.OK.value()));

        return http.build();
    }
}

