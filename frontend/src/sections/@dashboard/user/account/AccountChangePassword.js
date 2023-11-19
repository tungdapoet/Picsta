import * as Yup from 'yup';
import { useSnackbar } from 'notistack';
// form
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
// @mui
import { Grid, Stack, Card, CardHeader } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import { FormProvider, RHFTextField } from '../../../../components/hook-form';

// ----------------------------------------------------------------------

export default function AccountChangePassword() {
  const { enqueueSnackbar } = useSnackbar();

  const ChangePassWordSchema = Yup.object().shape({
    oldPassword: Yup.string().required('Old Password is required'),
    newPassword: Yup.string().min(6, 'Password must be at least 6 characters').required('New Password is required'),
    confirmNewPassword: Yup.string().oneOf([Yup.ref('newPassword'), null], 'Passwords must match'),
  });

  const defaultValues = {
    oldPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  };

  const methods = useForm({
    resolver: yupResolver(ChangePassWordSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      reset();
      enqueueSnackbar('Update success!');
    } catch (error) {
      console.error(error);
    }
  };

  return (
  <Grid container spacing={3} justifyContent="flex-end" sx={{ pt: 3 }} >
    <Grid item xs={12} md={8}>
    <Card sx={{ p: 3 }}>
    <CardHeader title="Change password" sx={{ padding: '12px 0px 16px' }}/>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3} alignItems="flex-end">
          <RHFTextField name="oldPassword" type="password" label="Old Password" />

          <RHFTextField name="newPassword" type="password" label="New Password" />

          <RHFTextField name="confirmNewPassword" type="password" label="Confirm New Password" />

          <LoadingButton type="submit" variant="contained" loading={isSubmitting}
            sx={{
              color: '#FFFFFF', // Change the text color to white
              backgroundColor: '#FF6636', // Change the background color to orange
            }}
          >
            Save Changes
          </LoadingButton>
        </Stack>
      </FormProvider>
    </Card>
    </Grid>
  </Grid>
  );


}
