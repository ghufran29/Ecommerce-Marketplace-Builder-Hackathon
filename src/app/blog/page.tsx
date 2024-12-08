import Image from 'next/image'
import Link from 'next/link'
import { IoIosArrowForward } from 'react-icons/io'

const page = () => {
  return (
    <div>
        {/* Bredcrumb Section */}
      <div className="bg-[linear-gradient(rgba(255,255,255,.1),rgba(255,255,243,.1)),url('/Rectangle-1.png')] bg-center bg-no-repeat bg-cover text-center min-h-[300px] flex items-center justify-center mb-8">
        <div className="container mx-auto text-center py-5 px-4">
          <Link href="/" className="flex items-center justify-center">
            <Image src="/Logo.png" alt="Logo" width={80} height={80} />
          </Link>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
            Blog
          </h1>
          <nav aria-label="breadcrumb">
            <ol className="flex justify-center space-x-2 text-sm sm:text-base">
              <li>
                <Link
                  href="/"
                  className="text-black font-semibold hover:underline transition"
                >
                  Home
                </Link>
              </li>
              <IoIosArrowForward className="text-base sm:text-xl text-black font-medium" />
              <li className="text-black">Blog</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* blog section */}
      
    </div>
  )
}

export default page