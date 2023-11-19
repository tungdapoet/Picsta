import * as Yup from 'yup';
import { useSnackbar } from 'notistack';
import { useCallback } from 'react';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Box, Grid, Card, Stack, Typography, CardHeader } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// hooks
import useAuth from '../../../../hooks/useAuth';
// utils
import { fData } from '../../../../utils/formatNumber';
// _mock
import { countries } from '../../../../_mock';
// components
import { FormProvider, RHFSwitch, RHFSelect, RHFTextField, RHFUploadAvatar } from '../../../../components/hook-form';

// ----------------------------------------------------------------------

export default function AccountGeneral() {
  const { enqueueSnackbar } = useSnackbar();

  const { user } = useAuth();

  const UpdateUserSchema = Yup.object().shape({
    displayName: Yup.string().required('Name is required'),
  });

  const defaultValues = {
    displayName: user?.displayName || '',
    email: user?.email || '',
    photoURL: user?.photoURL || '',
    phoneNumber: user?.phoneNumber || '',
    country: user?.country || '',
    address: user?.address || '',
    state: user?.state || '',
    city: user?.city || '',
    zipCode: user?.zipCode || '',
    about: user?.about || '',
    isPublic: user?.isPublic || false,
  };

  const methods = useForm({
    resolver: yupResolver(UpdateUserSchema),
    defaultValues,
  });

  const {
    setValue,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      enqueueSnackbar('Update success!');
    } catch (error) {
      console.error(error);
    }
  };

  const handleDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];

      if (file) {
        setValue(
          'photoURL',
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        );
      }
    },
    [setValue]
  );

  const isEmailVerified = false;

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card sx={{ py: 10, px: 3, textAlign: 'center' }}>
            <RHFUploadAvatar
              name="photoURL"
              accept="image/*"
              maxSize={3145728}
              onDrop={handleDrop}
              helperText={
                <Typography
                  variant="caption"
                  sx={{
                    mt: 2,
                    mx: 'auto',
                    display: 'block',
                    textAlign: 'center',
                    color: 'text.secondary',
                  }}
                >
                  Allowed *.jpeg, *.jpg, *.png, *.gif
                  <br /> max size of {fData(3145728)}
                </Typography>
              }
            />

            <RHFSwitch name="isPublic" labelPlacement="start" label="Public Profile" sx={{ mt: 5 }} />
          </Card>
        </Grid>

        <Grid item xs={12} md={8}>
          <Card sx={{ p: 3 }}>
            <CardHeader title="Edit profile" sx={{ padding: '12px 0px 16px' }}/>
            <Box
              sx={{
                display: 'grid',
                rowGap: 3,
                columnGap: 2,
                gridTemplateColumns: { xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)' },
              }}
            >
              <RHFTextField name="displayName" label="First Name" />
              <RHFTextField name="lastName" label="Last Name" />
              <RHFTextField name="username" label="Username" />
              <RHFTextField name="email" label="Email Address" />
              <RHFSelect name="country" label="Country" placeholder="Your tittle, proffesion or small biography">
                <option value="" />
                {countries.map((option) => (
                  <option key={option.code} value={option.label}>
                    {option.label}
                  </option>
                ))}
              </RHFSelect>

            </Box>

            <Stack spacing={3} alignItems="flex-end" sx={{ mt: 3 }}>
              <RHFTextField
                name="title" multiline rows={3}
                label="Title"
                placeholder="Your tittle, profession or small biography"
                inputProps={{ maxLength: 50 }}
              />

              <LoadingButton type="submit" variant="contained" loading={isSubmitting}
                sx={{
                  color: '#FFFFFF', // Change the text color to white
                  backgroundColor: '#FF6636', // Change the background color to orange
                }}
              >
                Save Changes
              </LoadingButton>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </FormProvider>
  );
}
