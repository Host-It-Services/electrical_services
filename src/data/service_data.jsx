import 'react-lazy-load-image-component/src/effects/blur.css'
import { Bolt, Wrench, Shield, Home, Droplet, Zap } from 'lucide-react'

export const services = [
  {
    icon: <Bolt />,
    title: "Electrical Repairs",
    description: "Quick and efficient repair services for all your electrical issues.",
    image: {
      src: "/assets/electrician-working.webp",
      srcSet: "/assets/electrician-working-small.webp 480w, /assets/electrician-working.webp 800w",
      sizes: "(max-width: 600px) 50vw, 220px"
    }
  },
  {
    icon: <Wrench  />,
    title: "Installations",
    description: "Professional installation of electrical systems and appliances.",
    image: {
      src: "/assets/male-electrician-small.webp",
      srcSet: "/assets/male-electrician-small.webp 480w, /assets/male-electrician.webp 800w",
      sizes: "(max-width: 600px) 50vw, 220px"
    }
  },
  {
    icon: <Shield />,
    title: "Safety Inspections",
    description: "Comprehensive safety checks to ensure your property meets all standards.",
    image: {
      src: "/assets/verification.webp",
      srcSet: "/assets/verification-small.webp 480w, /assets/verification.webp 800w",
      sizes: "(max-width: 600px) 50vw, 220px"
    }
  },
  {
    icon: <Droplet  />,
    title: "Plumbing Expertise",
    description: "A full range of plumbing services, quickly and professionally handled.",
    image: {
      src: "/assets/plumbing.webp",
      srcSet: "/assets/plumbing-small.webp 480w, /assets/plumbing.webp 800w",
      sizes: "(max-width: 600px) 50vw, 220px"
    }
  },
  {
    icon: <Home />,
    title: "House Renovations",
    description: "Complete electrical and plumbing services for house renovations.",
    image: {
      src: "/assets/full-shot.webp",
      srcSet: "/assets/full-shot-small.webp 480w, /assets/full-shot.webp 800w",
      sizes: "(max-width: 600px) 50vw, 220px"
    }
  },
  {
    icon: <Zap />,
    title: "Electric Fence Installation",
    description: "Secure your property with our professional electric fence installation services.",
    image: {
      src: "/assets/electric-fence.webp",
      srcSet: "/assets/electric-fence-small.webp 50w, /assets/electric-fence.webp 50w",
      sizes: "(max-width: 600px) 50vw, 220px"
    }
  }
]
