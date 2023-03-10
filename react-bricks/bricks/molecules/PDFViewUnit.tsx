import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import PDFViewer from "@/components/pdf-viewer";
import { types } from 'react-bricks/frontend';
import { blockNames } from '../blockNames'
import { DefaultColors } from '../Shared/colors';
import { DefaultLayoutProps, LayoutProp } from '../Shared/LayoutProps';
import Section, { SectionProps } from '../Layout/Section';
import { PageViewSize } from '@/components/atoms/PageViewSize';
import { VTitle } from '@/components/atoms/VTitle';
import { useDetectIsMobileView } from '@/hooks/useDetectIsMobileView';
import { FpsFileUploader } from '../Shared/FpsFileUploader';

interface IPDFViewUnitProps extends SectionProps {
  pdfUrl: string;
  title: string;
}

const PDFViewUnit: types.Brick<IPDFViewUnitProps> = ({title, pdfUrl, ...sectionProps}) => {
  const {isMobileView, isTabletView} = useDetectIsMobileView();
  return (
    <Section {...sectionProps} className="prose">
      <PageViewSize enabled={!sectionProps.bgImage} className="items-center justify-center">
        <VTitle type='h4'>{title}</VTitle>
        <PDFViewer url={pdfUrl} height={isMobileView ? 530 : 880} width={isMobileView ? innerWidth - 10 : 680}/>
        {/* <object data={pdfUrl} width='100%' height={1009} ></object> */}
      </PageViewSize>
    </Section>
  )
}

PDFViewUnit.schema = {
  name: blockNames.PDFViewUnit,
  label: 'PSD Viewer Unit',
  category: 'TeamOs-Molecules-Document',

  getDefaultProps: () => ({
    ...DefaultLayoutProps,
    pdfUrl: 'https://team3d.io/generator/User_Manual.pdf',
    title: 'Read The User Manual',
  }),
  sideEditProps: [
    LayoutProp({ colors: DefaultColors }),
    {
      name: 'pdfUrl',
      label: 'pdf Src',
      defaultOpen: true,
      type: types.SideEditPropType.Custom,
      component: (props) => FpsFileUploader({ ...props, acceptOnly: 'application/pdf'}),
    },
    {
      name: 'title',
      label: 'Title',
      type: types.SideEditPropType.Text,
    }
  ],
}

export default PDFViewUnit
