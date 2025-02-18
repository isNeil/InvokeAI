import { useAppDispatch, useAppSelector } from 'app/store/storeHooks';
import { InvControl } from 'common/components/InvControl/InvControl';
import { InvSlider } from 'common/components/InvSlider/InvSlider';
import { setRefinerCFGScale } from 'features/sdxl/store/sdxlSlice';
import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

const ParamSDXLRefinerCFGScale = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const refinerCFGScale = useAppSelector((s) => s.sdxl.refinerCFGScale);
  const sliderMin = useAppSelector((s) => s.config.sd.guidance.sliderMin);
  const sliderMax = useAppSelector((s) => s.config.sd.guidance.sliderMax);
  const numberInputMin = useAppSelector(
    (s) => s.config.sd.guidance.numberInputMin
  );
  const numberInputMax = useAppSelector(
    (s) => s.config.sd.guidance.numberInputMax
  );
  const coarseStep = useAppSelector((s) => s.config.sd.guidance.coarseStep);
  const fineStep = useAppSelector((s) => s.config.sd.guidance.fineStep);
  const initial = useAppSelector((s) => s.config.sd.guidance.initial);
  const marks = useMemo(
    () => [sliderMin, Math.floor(sliderMax / 2), sliderMax],
    [sliderMax, sliderMin]
  );

  const onChange = useCallback(
    (v: number) => dispatch(setRefinerCFGScale(v)),
    [dispatch]
  );

  return (
    <InvControl label={t('sdxl.cfgScale')}>
      <InvSlider
        value={refinerCFGScale}
        defaultValue={initial}
        min={sliderMin}
        max={sliderMax}
        step={coarseStep}
        fineStep={fineStep}
        onChange={onChange}
        withNumberInput
        numberInputMin={numberInputMin}
        numberInputMax={numberInputMax}
        marks={marks}
      />
    </InvControl>
  );
};

export default memo(ParamSDXLRefinerCFGScale);
