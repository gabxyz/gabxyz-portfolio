import { Meta } from '@/components/Meta'
import { Main } from '@/templates/Main'
import { AppConfig } from '@/utils/AppConfig'

const Home = () => {
  return (
    <Main
      meta={
        <Meta
          title="gabxyz"
          description="Hey, this my name is Gabriel Rodrigues and this is my personal website."
        />
      }
    >
      <h1>{AppConfig.description}</h1>
    </Main>
  )
}

export default Home
