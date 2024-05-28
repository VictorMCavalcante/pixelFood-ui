import styled from 'styled-components'

export const Container = styled.footer`
  width: 100%;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  .container-footer {
    height: 77px;
    max-width: 1120px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;

    .text-area-footer {
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-family: 'DM Sans', sans-serif;
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
      text-align: center;
    }
    
  }
`
