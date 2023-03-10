import * as React from 'react'
import classNames from 'classnames'
import { Text, types, RichText } from 'react-bricks/frontend'
import { blockNames } from '../blockNames'
import { VText } from '@/components/atoms/VText'
import { TitleType, VTitle } from '@/components/atoms/VTitle'
import VRBRichText from './VRBRichText'

export interface VRBTitleProps {
  propName: string,
  type: TitleType;
  overrideTextColor?: boolean
  className?: string
  textAlign?: AlignSetting
}

const VRBTitle: types.Brick<VRBTitleProps> = ({
  type,
  overrideTextColor,
  propName,
  className,
  textAlign,
  ...rest
}) => {
  return (
    <>
    <VRBRichText
      isTitle={true}
      type={type}
      textAlign={textAlign}
      className={classNames('prose', className)}
      overrideTextColor={overrideTextColor}
      propName={propName || 'title'}
    {...rest}/>
    </>
  )
}

VRBTitle.schema = {
  name: blockNames.Title,
  label: 'Title',
  category: 'vidya elements',
  hideFromAddMenu: true,
  getDefaultProps: () => ({
    type: 'h2',
    overrideTextColor: false
  }),
  sideEditProps: [
    {
      name: 'type',
      label: 'Heading Type',
      defaultOpen: true,
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
        options: [
          { label: 'H1', value: 'h1' },
          { label: 'H2', value: 'h2' },
          { label: 'H3', value: 'h3' },
          { label: 'H4', value: 'h4' },
          { label: 'H5', value: 'h5' },
          { label: 'H6', value: 'h6' },
        ],
      }
    }
  ],
}

export default VRBTitle