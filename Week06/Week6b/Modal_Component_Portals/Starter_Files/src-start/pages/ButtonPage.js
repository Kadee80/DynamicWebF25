import Button from '../components/Button'

const ButtonPage = () => {
  return (
    <>
      <h1>Button Page!</h1>
      <div>
        <Button
          primary
          onClick={() => {
            console.log('CLICK!')
          }}
        >
          Buy Now
        </Button>
      </div>
      <div>
        <Button secondary rounded className="fixed right-0 bottom-0">
          Secondary Button
        </Button>
      </div>
      <div>
        <Button danger>Delete</Button>
      </div>
      <div>
        <Button warning outline rounded>
          Are you sure?
        </Button>
      </div>
      <div>
        <Button success outline>
          Success
        </Button>
      </div>
    </>
  )
}

export default ButtonPage
