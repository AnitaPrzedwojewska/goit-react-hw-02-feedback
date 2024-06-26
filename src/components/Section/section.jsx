import { SectionStyled, Title } from "./section.styled"

export const Section = ({ title, children }) => {
  return (
    <SectionStyled>
      <Title>{title}</Title>
      {children}
    </SectionStyled>
  )
}