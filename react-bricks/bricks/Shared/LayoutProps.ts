import { types } from 'react-bricks/frontend'
import { bgColors } from './colors'

interface LayoutPropProps {
  colors?: types.IOption[]
}

export const DefaultLayoutProps = {
  bg: bgColors.none.value,
  paddingX: 0,
  paddingY: 0,
  height: 'auto',
  rounded: 'none',
  enableParallax: true,
  parallaxSpeed:500,
  blur:'sm',
}

export const LayoutProp = ({
  colors,
}: LayoutPropProps = {}): types.ISideGroup => {
  return  {
    groupName: 'Layout',
    defaultOpen: true,
    props: [
      {
        name: 'bg',
        label: 'Background Color',
        type: types.SideEditPropType.Select,
        selectOptions: {
          display: types.OptionsDisplay.Color,
          options: [...colors],
        },
      },
      {
        name: 'enableParallax',
        label: 'Enable Parallax',
        type: types.SideEditPropType.Boolean,
      },
      {
        name: 'parallaxSpeed',
        label: 'Parallax Speed',
        type: types.SideEditPropType.Number,
      },
      {
        name: 'bgOffsetY',
        label: 'Background Offset Y',
        type: types.SideEditPropType.Number,
      },
      {
        name: 'blur',
        label: 'Enable Blur',
        type: types.SideEditPropType.Select,
        selectOptions: {
          display: types.OptionsDisplay.Select,
          options: [
            { value: 'none', label: 'None' },
            { value: 'sm', label: 'Small' },
            { value: 'md', label: 'Medium' },
            { value: 'lg', label: 'Large' },
          ],
        },
      },
      {
        name: 'bgImage',
        label: 'Background Image',
        type: types.SideEditPropType.Image,
      },
      // {
      //   name: 'bgVideo',
      //   label: 'Background Video',
      //   type: types.SideEditPropType.Custom,
      //   component: (props) => VideoFileViewer({propName: 'bgVideo', ...props}),
      // },
      {
        name: 'height',
        label: 'Height',
        type: types.SideEditPropType.Text,
      },
      {
        name: 'rounded',
        label: 'Rounded',
        type: types.SideEditPropType.Select,
        selectOptions: {
          display: types.OptionsDisplay.Select,
          options: [
            { value: 'none', label: 'None' },
            { value: 'sm', label: 'Small' },
            { value: 'md', label: 'Medium' },
            { value: 'lg', label: 'Large' },
          ],
        },
      },
      {
        name: 'paddingX',
        label: 'Padding X',
        type: types.SideEditPropType.Number,
        // type: types.SideEditPropType.Select,
        // selectOptions: {
        //   display: types.OptionsDisplay.Select,
        //   options: [
        //     { value: 'none', label: 'None' },
        //     { value: 'sm', label: 'Small' },
        //     { value: 'lg', label: 'Large' },
        //     { value: 'xl', label: 'X Large' },
        //     { value: 'xxl', label: 'XX Large' },

        //   ],
        // },
      },
      {
        name: 'paddingY',
        label: 'Padding Y',
        type: types.SideEditPropType.Number,
        // type: types.SideEditPropType.Select,
        // selectOptions: {
        //   display: types.OptionsDisplay.Select,
        //   options: [
        //     { value: 'none', label: 'None' },
        //     { value: 'sm', label: 'Small' },
        //     { value: 'lg', label: 'Large' },
        //     { value: 'xl', label: 'X Large' },
        //     { value: 'xxl', label: 'XX Large' },
        //   ],
        // },
      }
    ],
  }
}