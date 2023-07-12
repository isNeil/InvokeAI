import ParamDynamicPromptsCollapse from 'features/dynamicPrompts/components/ParamDynamicPromptsCollapse';
import ParamLoraCollapse from 'features/lora/components/ParamLoraCollapse';
import ParamAdvancedCollapse from 'features/parameters/components/Parameters/Advanced/ParamAdvancedCollapse';
import ParamControlNetCollapse from 'features/parameters/components/Parameters/ControlNet/ParamControlNetCollapse';
import ParamNegativeConditioning from 'features/parameters/components/Parameters/Core/ParamNegativeConditioning';
import ParamPositiveConditioning from 'features/parameters/components/Parameters/Core/ParamPositiveConditioning';
import ParamHiresCollapse from 'features/parameters/components/Parameters/Hires/ParamHiresCollapse';
import ParamNoiseCollapse from 'features/parameters/components/Parameters/Noise/ParamNoiseCollapse';
import ParamSeamlessCollapse from 'features/parameters/components/Parameters/Seamless/ParamSeamlessCollapse';
import ParamSymmetryCollapse from 'features/parameters/components/Parameters/Symmetry/ParamSymmetryCollapse';
import ParamVariationCollapse from 'features/parameters/components/Parameters/Variations/ParamVariationCollapse';
import ProcessButtons from 'features/parameters/components/ProcessButtons/ProcessButtons';
import { memo } from 'react';
import TextToImageTabCoreParameters from './TextToImageTabCoreParameters';
import BoardSelect from '../../../../parameters/components/BoardSelect';

const TextToImageTabParameters = () => {
  return (
    <>
      <ParamPositiveConditioning />
      <ParamNegativeConditioning />
      <BoardSelect />
      <ProcessButtons />
      <TextToImageTabCoreParameters />
      <ParamLoraCollapse />
      <ParamDynamicPromptsCollapse />
      <ParamControlNetCollapse />
      <ParamVariationCollapse />
      <ParamNoiseCollapse />
      <ParamSymmetryCollapse />
      <ParamHiresCollapse />
      <ParamSeamlessCollapse />
      <ParamAdvancedCollapse />
    </>
  );
};

export default memo(TextToImageTabParameters);
