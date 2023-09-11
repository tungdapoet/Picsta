package com.piczio.userservice.config;


import lombok.AllArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.context.SecurityContextHolder;
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
  public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
    http
        .csrf(AbstractHttpConfigurer::disable)
        .authorizeHttpRequests(authorize -> authorize
            .requestMatchers(
                "/swagger-ui/**",
                "/api-docs/**",
                "/actuator/**",
                "/api/v1/auth/**", "/api/v1/oauth2/**"
            ).permitAll()
            .requestMatchers("/api/v1/management/**").hasRole(ADMIN.name())
            .requestMatchers(HttpMethod.GET, "/api/v1/management/**").hasAuthority(ADMIN_READ.name())
            .requestMatchers(HttpMethod.POST, "/api/v1/management/**").hasAuthority(ADMIN_CREATE.name())
            .requestMatchers(HttpMethod.PUT, "/api/v1/management/**").hasAuthority(ADMIN_UPDATE.name())
            .requestMatchers(HttpMethod.DELETE, "/api/v1/management/**").hasAuthority(ADMIN_DELETE.name())
            .anyRequest().authenticated()
        ).oauth2Login(oauth2 -> oauth2
                    .defaultSuccessUrl("/api/v1/oauth2/success", true)
                    .failureUrl("/api/v1/oauth2/failed"))
        .sessionManagement(session -> session
            .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
        )
        .authenticationProvider(authenticationProvider)
        .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class)
        .logout(logout -> logout
            .logoutUrl("/api/v1/auth/logout")
            .addLogoutHandler(logoutService)
            .logoutSuccessHandler((request, response, authentication) -> {
              SecurityContextHolder.clearContext();
              response.setStatus(HttpStatus.OK.value());
            })
        );

    return http.build();
  }
}

