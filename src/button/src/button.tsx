import { defineComponent, toRefs } from 'vue'
import { ButtonProps, buttonProps } from './button-type'
import '../style/button.scss'
export default defineComponent({
  name: 'SButton',
  props: buttonProps,
  setup(props: ButtonProps, { slots }) {
    const { type, size, disabled, block } = toRefs(props)
    const blockClass = block.value ? 's-btn--block' : ''

    return () => {
      const defaultSolt = slots.default ? slots.default() : '按钮'
      return (
        <button
          class={`s-btn s-btn--${type.value} s-btn--${size.value} ${blockClass}`}
          disabled={disabled.value}
        >
          {defaultSolt}
        </button>
      )
    }
  }
})
