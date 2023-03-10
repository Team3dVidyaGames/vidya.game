import React from 'react'
import { types, useAdminContext } from 'react-bricks/frontend';
import { blockNames } from '../../blockNames'
import { DefaultColors } from '../../Shared/colors';
import { DefaultLayoutProps, LayoutProp } from '../../Shared/LayoutProps';
import Section, { SectionProps } from '../../Layout/Section';
import { PageViewSize } from '@/components/atoms/PageViewSize';
import VRBTitle from '../../atoms/VRBTitle';
import VRBText from '../../atoms/VRBText';
import VRBImage from '../../atoms/VRBImage';
import { YTVideo } from '@/components/atoms/YTVideo';
import { useDetectIsMobileView } from '@/hooks/useDetectIsMobileView';
import { IsTextEmpty } from '../../Shared/helper';

interface IHeaderYTAreaProps extends SectionProps {
  title?: string
  paragraph?: string
  width?: string
  height?: string
  videoId?: string
}

const HeaderYTArea: types.Brick<IHeaderYTAreaProps> = ({title, paragraph, videoId, width, height, ...sectionProps}) => {
  const { isAdmin } = useAdminContext();
  const { isMobileView } = useDetectIsMobileView();
  return (
    <Section {...sectionProps} className="prose px-vsm">
      <PageViewSize enabled={!sectionProps.bgImage} className='w-full !max-w-blog justify-center items-center !gap-vmd'>
        {(isAdmin || (!isAdmin && !IsTextEmpty(title))) && <VRBTitle type='h3' propName='title'></VRBTitle>}
        {(isAdmin || (!isAdmin && !IsTextEmpty(paragraph)))&& <VRBText size='lg' propName='paragraph'></VRBText>}
        <div  style={{
          width: width,
          height: isMobileView ? '300px' : height,
          // maxWidth: maxWidth,
          // maxHeight: maxHeight,
        }} className='relative p-[5px]'>
        <YTVideo className='h-full' videoId={videoId}></YTVideo>
        <VRBText size='sm' textAlign='center' className='!opacity-80' propName='description'></VRBText>
      </div>
      </PageViewSize>
    </Section>
  )
}

HeaderYTArea.schema = {
  name: blockNames.HeaderYTArea,
  label: 'YT Video with Rich Text',
  category: 'TeamOs-Blog-elements',

  getDefaultProps: () => ({
    ...DefaultLayoutProps,
    height: '500px',
    width: '100%',
    videoId: 'd8fgnPOihUQ',
  }),
  sideEditProps: [
    LayoutProp({ colors: DefaultColors }),
    {
      name: 'width',
      label: 'Width',
      type: types.SideEditPropType.Text
    },
    {
      name: 'height',
      label: 'Height',
      type: types.SideEditPropType.Text
    },
    {
      name: 'videoId',
      label: 'Video Id',
      type: types.SideEditPropType.Text
    }
  ],
}

export default HeaderYTArea
