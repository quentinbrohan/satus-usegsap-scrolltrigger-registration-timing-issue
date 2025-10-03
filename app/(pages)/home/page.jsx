import { Wrapper } from '../(components)/wrapper'
import { Hero } from './(components)/Hero'
import { ScrollTriggerSection } from './(components)/ScrollTriggerSection'

export default function Home() {
  return (
    <Wrapper theme="light" lenis={{}}>
      <Hero />
      <ScrollTriggerSection />
    </Wrapper>
  )
}
