import React from 'react'
import { types } from 'react-bricks/frontend';
import { blockNames } from '../blockNames'
import { bgColors } from '../Shared/colors';
import { DefaultLayoutProps, LayoutProp } from '../Shared/LayoutProps';
import Section, { SectionProps } from '../Layout/Section';
import { ISwapSectionProps, SwapSection } from '@/components/molecules/SwapSection';
import VRBTitle from '../atoms/VRBTitle';
import { useDetectIsMobileView } from '@/hooks/useDetectIsMobileView';
import { VMouseIcon } from '@/components/atoms/VMouseIcon';
import { ProgramListSection } from '@/components/organisms/programListSection';

interface ISwapUnit extends SectionProps, ISwapSectionProps {
  height?: string
  pageTitle?: string
  pageSubtitle?: string
}

const SwapUnit: types.Brick<ISwapUnit> = ({ defaultToken0, defaultToken1, ...sectionProps }) => {
  const { isMobileView } = useDetectIsMobileView();
  return (
    <Section className='prose' {...sectionProps}>
      <div className='flex flex-col max-w-page w-full justify-between items-center z-[100]'>
        <div className='flex flex-col w-full'>
          <div className='flex w-full'>
            <div className='max-w-[650px] flex flex-col justify-start items-center gap-y-2 pl-4 sm:pt-12 pt-5'>
              <VRBTitle textAlign='left' overrideTextColor type={isMobileView ? 'h2' : 'h1'} className='mr-4' propName='pageTitle'></VRBTitle>
              <VRBTitle textAlign='left' overrideTextColor type='h5' className='font-roboto font-normal tracking-normal leading-tight normal-case' propName='pageSubtitle'></VRBTitle>
            </div>
          </div>
          <div className='w-full h-full flex flex-row-reverse items-center justify-center sm:pt-12 pt-2 gap-vmd flex-wrap'>
            <SwapSection showBorder={true} defaultToken0={defaultToken0?.toLocaleUpperCase()} defaultToken1={defaultToken1?.toLocaleUpperCase()}></SwapSection>
            <ProgramListSection/>
          </div>
        </div>
        <VMouseIcon overrideColor className='z-[100]'/>
      </div>
    </Section>
  )
}

SwapUnit.schema = {
  name: blockNames.SwapUnit,
  label: 'SwapUnit Unit',
  category: 'TeamOs-Molecules',

  getDefaultProps: () => ({
    ...DefaultLayoutProps,
    defaultToken0: 'ETH',
    defaultToken1: 'VIDYA',
    pageTitle: 'A REAL GAME',
    pageSubtitle: 'Tired of the same game? Swap it out for a new one! try it now!',
  }),
  sideEditProps: [
    LayoutProp({ colors: [bgColors.none, bgColors.dark, bgColors.light, bgColors.gray] }),
    {
      name: 'defaultToken0',
      label: 'Default Token 0',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'defaultToken1',
      label: 'Default Token 1',
      type: types.SideEditPropType.Text,
    }
  ],
}

export default SwapUnit
