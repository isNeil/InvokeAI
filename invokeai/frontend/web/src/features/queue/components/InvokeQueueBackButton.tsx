import { Flex, Spacer } from '@chakra-ui/layout';
import { useAppSelector } from 'app/store/storeHooks';
import { InvButton } from 'common/components/InvButton/InvButton';
import { QueueIterationsNumberInput } from 'features/queue/components/QueueIterationsNumberInput';
import { useQueueBack } from 'features/queue/hooks/useQueueBack';
import { memo } from 'react';
import { RiSparkling2Fill } from 'react-icons/ri';

import { QueueButtonTooltip } from './QueueButtonTooltip';

const invoke = 'Invoke';

export const InvokeQueueBackButton = memo(() => {
  const { queueBack, isLoading, isDisabled } = useQueueBack();
  const isLoadingDynamicPrompts = useAppSelector(
    (s) => s.dynamicPrompts.isLoading
  );

  return (
    <Flex pos="relative" flexGrow={1} minW="240px">
      <QueueIterationsNumberInput />
      <InvButton
        onClick={queueBack}
        isLoading={isLoading || isLoadingDynamicPrompts}
        loadingText={invoke}
        isDisabled={isDisabled}
        rightIcon={<RiSparkling2Fill />}
        tooltip={<QueueButtonTooltip />}
        variant="solid"
        zIndex={1}
        colorScheme="invokeYellow"
        size="lg"
        w="calc(100% - 60px)"
        flexShrink={0}
        justifyContent="space-between"
        spinnerPlacement="end"
      >
        <span>{invoke}</span>
        <Spacer />
      </InvButton>
    </Flex>
  );
});

InvokeQueueBackButton.displayName = 'InvokeQueueBackButton';
