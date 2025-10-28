import {useState} from 'react'
import Button from '../components/Button'
import Modal from '../components/Modal'

const ModalPage = () => {
  const [modalOpen, setModalOpen] = useState(false)

  const handleClick = () => {
    setModalOpen(true)
  }

  const handleCloseClick = () => {
    setModalOpen(false)
  }

  const modalContent = <p>This is modal content populated by children prop!</p>

  const actionBar = (
    <>
      <Button
        success
        outline
        onClick={() => {
          console.log('other button function fired!')
        }}
        className="mr-8"
      >
        Some Prompt...
      </Button>
      <Button danger outline onClick={handleCloseClick}>
        Close Modal
      </Button>
    </>
  )
  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        tincidunt massa eget orci porttitor, quis tempor nibh viverra. In vitae
        mattis neque. Nunc et dignissim nibh. Curabitur sed sapien sit amet ante
        gravida consectetur ut sit amet odio. Integer eleifend elementum nulla,
        sed accumsan diam mattis vel. Praesent dignissim, lorem vitae placerat
        accumsan, nunc eros tempus lacus, id maximus nunc ante vitae velit.
        Pellentesque molestie feugiat tincidunt. Ut quis finibus libero. Aliquam
        diam tortor, tempus interdum placerat at, tristique ultricies eros.
        Vestibulum sodales dolor in felis dictum, ut malesuada nisi viverra.
        Nunc vel augue sed enim ultricies gravida. Nulla accumsan, urna quis
        aliquam molestie, arcu magna accumsan odio, sit amet tristique sapien
        augue in lacus. Morbi rhoncus nunc eu dui ornare, ac vestibulum odio
        ornare. Nam mollis ex eget diam sodales, sit amet eleifend eros
        accumsan.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        tincidunt massa eget orci porttitor, quis tempor nibh viverra. In vitae
        mattis neque. Nunc et dignissim nibh. Curabitur sed sapien sit amet ante
        gravida consectetur ut sit amet odio. Integer eleifend elementum nulla,
        sed accumsan diam mattis vel. Praesent dignissim, lorem vitae placerat
        accumsan, nunc eros tempus lacus, id maximus nunc ante vitae velit.
        Pellentesque molestie feugiat tincidunt. Ut quis finibus libero. Aliquam
        diam tortor, tempus interdum placerat at, tristique ultricies eros.
        Vestibulum sodales dolor in felis dictum, ut malesuada nisi viverra.
        Nunc vel augue sed enim ultricies gravida. Nulla accumsan, urna quis
        aliquam molestie, arcu magna accumsan odio, sit amet tristique sapien
        augue in lacus. Morbi rhoncus nunc eu dui ornare, ac vestibulum odio
        ornare. Nam mollis ex eget diam sodales, sit amet eleifend eros
        accumsan.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        tincidunt massa eget orci porttitor, quis tempor nibh viverra. In vitae
        mattis neque. Nunc et dignissim nibh. Curabitur sed sapien sit amet ante
        gravida consectetur ut sit amet odio. Integer eleifend elementum nulla,
        sed accumsan diam mattis vel. Praesent dignissim, lorem vitae placerat
        accumsan, nunc eros tempus lacus, id maximus nunc ante vitae velit.
        Pellentesque molestie feugiat tincidunt. Ut quis finibus libero. Aliquam
        diam tortor, tempus interdum placerat at, tristique ultricies eros.
        Vestibulum sodales dolor in felis dictum, ut malesuada nisi viverra.
        Nunc vel augue sed enim ultricies gravida. Nulla accumsan, urna quis
        aliquam molestie, arcu magna accumsan odio, sit amet tristique sapien
        augue in lacus. Morbi rhoncus nunc eu dui ornare, ac vestibulum odio
        ornare. Nam mollis ex eget diam sodales, sit amet eleifend eros
        accumsan.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        tincidunt massa eget orci porttitor, quis tempor nibh viverra. In vitae
        mattis neque. Nunc et dignissim nibh. Curabitur sed sapien sit amet ante
        gravida consectetur ut sit amet odio. Integer eleifend elementum nulla,
        sed accumsan diam mattis vel. Praesent dignissim, lorem vitae placerat
        accumsan, nunc eros tempus lacus, id maximus nunc ante vitae velit.
        Pellentesque molestie feugiat tincidunt. Ut quis finibus libero. Aliquam
        diam tortor, tempus interdum placerat at, tristique ultricies eros.
        Vestibulum sodales dolor in felis dictum, ut malesuada nisi viverra.
        Nunc vel augue sed enim ultricies gravida. Nulla accumsan, urna quis
        aliquam molestie, arcu magna accumsan odio, sit amet tristique sapien
        augue in lacus. Morbi rhoncus nunc eu dui ornare, ac vestibulum odio
        ornare. Nam mollis ex eget diam sodales, sit amet eleifend eros
        accumsan.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        tincidunt massa eget orci porttitor, quis tempor nibh viverra. In vitae
        mattis neque. Nunc et dignissim nibh. Curabitur sed sapien sit amet ante
        gravida consectetur ut sit amet odio. Integer eleifend elementum nulla,
        sed accumsan diam mattis vel. Praesent dignissim, lorem vitae placerat
        accumsan, nunc eros tempus lacus, id maximus nunc ante vitae velit.
        Pellentesque molestie feugiat tincidunt. Ut quis finibus libero. Aliquam
        diam tortor, tempus interdum placerat at, tristique ultricies eros.
        Vestibulum sodales dolor in felis dictum, ut malesuada nisi viverra.
        Nunc vel augue sed enim ultricies gravida. Nulla accumsan, urna quis
        aliquam molestie, arcu magna accumsan odio, sit amet tristique sapien
        augue in lacus. Morbi rhoncus nunc eu dui ornare, ac vestibulum odio
        ornare. Nam mollis ex eget diam sodales, sit amet eleifend eros
        accumsan.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        tincidunt massa eget orci porttitor, quis tempor nibh viverra. In vitae
        mattis neque. Nunc et dignissim nibh. Curabitur sed sapien sit amet ante
        gravida consectetur ut sit amet odio. Integer eleifend elementum nulla,
        sed accumsan diam mattis vel. Praesent dignissim, lorem vitae placerat
        accumsan, nunc eros tempus lacus, id maximus nunc ante vitae velit.
        Pellentesque molestie feugiat tincidunt. Ut quis finibus libero. Aliquam
        diam tortor, tempus interdum placerat at, tristique ultricies eros.
        Vestibulum sodales dolor in felis dictum, ut malesuada nisi viverra.
        Nunc vel augue sed enim ultricies gravida. Nulla accumsan, urna quis
        aliquam molestie, arcu magna accumsan odio, sit amet tristique sapien
        augue in lacus. Morbi rhoncus nunc eu dui ornare, ac vestibulum odio
        ornare. Nam mollis ex eget diam sodales, sit amet eleifend eros
        accumsan.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        tincidunt massa eget orci porttitor, quis tempor nibh viverra. In vitae
        mattis neque. Nunc et dignissim nibh. Curabitur sed sapien sit amet ante
        gravida consectetur ut sit amet odio. Integer eleifend elementum nulla,
        sed accumsan diam mattis vel. Praesent dignissim, lorem vitae placerat
        accumsan, nunc eros tempus lacus, id maximus nunc ante vitae velit.
        Pellentesque molestie feugiat tincidunt. Ut quis finibus libero. Aliquam
        diam tortor, tempus interdum placerat at, tristique ultricies eros.
        Vestibulum sodales dolor in felis dictum, ut malesuada nisi viverra.
        Nunc vel augue sed enim ultricies gravida. Nulla accumsan, urna quis
        aliquam molestie, arcu magna accumsan odio, sit amet tristique sapien
        augue in lacus. Morbi rhoncus nunc eu dui ornare, ac vestibulum odio
        ornare. Nam mollis ex eget diam sodales, sit amet eleifend eros
        accumsan.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        tincidunt massa eget orci porttitor, quis tempor nibh viverra. In vitae
        mattis neque. Nunc et dignissim nibh. Curabitur sed sapien sit amet ante
        gravida consectetur ut sit amet odio. Integer eleifend elementum nulla,
        sed accumsan diam mattis vel. Praesent dignissim, lorem vitae placerat
        accumsan, nunc eros tempus lacus, id maximus nunc ante vitae velit.
        Pellentesque molestie feugiat tincidunt. Ut quis finibus libero. Aliquam
        diam tortor, tempus interdum placerat at, tristique ultricies eros.
        Vestibulum sodales dolor in felis dictum, ut malesuada nisi viverra.
        Nunc vel augue sed enim ultricies gravida. Nulla accumsan, urna quis
        aliquam molestie, arcu magna accumsan odio, sit amet tristique sapien
        augue in lacus. Morbi rhoncus nunc eu dui ornare, ac vestibulum odio
        ornare. Nam mollis ex eget diam sodales, sit amet eleifend eros
        accumsan.
      </p>
      <Button onClick={handleClick} success rounded>
        Open Modal!
      </Button>
      const actionBar = (
      {modalOpen && (
        <Modal onClose={handleCloseClick} actionBar={actionBar} crazy>
          {modalContent}
        </Modal>
      )}
    </div>
  )
}

export default ModalPage
