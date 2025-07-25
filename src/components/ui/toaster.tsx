'use client';

import {
  Toaster as ChakraToaster,
  Portal,
  Spinner,
  Stack,
  Toast,
  Box,
  createToaster,
  type ToasterProps,
} from '@chakra-ui/react';

interface ToastItem {
  id: string;
  type?: 'success' | 'error' | 'warning' | 'info' | 'loading';
  title?: string;
  description?: string;
  action?: {
    label: string;
    onClick?: () => void;
  };
  meta?: {
    closable?: boolean;
  };
}

export const toaster = createToaster({
  placement: 'top',
  pauseOnPageIdle: true,
});

const toasterProps: ToasterProps = {
  toaster: toaster,
  insetInline: { mdDown: '4' },
  children: (toast: ToastItem) => (
    <Toast.Root width={{ md: 'sm' }}>
      {toast.type === 'loading' ? <Spinner size="sm" color="blue.solid" /> : <Toast.Indicator />}
      <Stack gap="1" flex="1" maxWidth="100%">
        {toast.title && <Toast.Title>{toast.title}</Toast.Title>}
        {toast.description && <Toast.Description>{toast.description}</Toast.Description>}
      </Stack>
      {toast.action && <Toast.ActionTrigger>{toast.action.label}</Toast.ActionTrigger>}
      {toast.meta?.closable && (
        <Box width="25px" height="25px" color="white" _hover={{ cursor: 'pointer' }}>
          <Toast.CloseTrigger />
        </Box>
      )}
    </Toast.Root>
  ),
};

export const Toaster = () => {
  return (
    <Portal>
      <ChakraToaster {...toasterProps} />
    </Portal>
  );
};
