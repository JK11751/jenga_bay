/** @jsxImportSource @emotion/react */
import { memo } from 'react'
import { css } from '@emotion/react'

const Dot = ({ active }) => {
  return (
    <span
      css={css`
        padding: 5px;
        z-index: 30;
        margin-right: 10px;
        cursor: pointer;
        border-radius: 50%;
        background: ${active ? 'blue' : 'grey'};
      `}
    />
  )
}

const MemoDot = memo(Dot)

const Dots = ({ slides, activeSlide }) => {
  return (
    <div
      css={css`
        position: absolute;
        bottom: 170px;
        width: 100%;
        z-index: 30;
        display: flex;
        align-items: center;
        justify-content: center;
      `}
    >
      {slides.map((slide, i) => (
        <MemoDot key={slide} active={activeSlide === i} />
      ))}
    </div>
  )
}

export default Dots;