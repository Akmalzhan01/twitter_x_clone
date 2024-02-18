"use client"

import Image from '@/node_modules/next/image'
import React, {useCallback} from 'react'
import Button from '../ui/button'
import { FcGoogle } from "@react-icons/all-files/fc/FcGoogle"
import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub"
import useRegisterModal from '@/hooks/useRegisterModal'
import RegisterModal from '../modals/register-modal'
import useLoginModal from '@/hooks/useLoginModal'
import LoginModal from '../modals/login-modal'

export default function Auth() {

  const registerModal = useRegisterModal()
  const loginModal = useLoginModal()

  const onOpenRegisterModal = useCallback(() => {
    registerModal.onOpen()
  }, [registerModal])
  const onOpenLoginModal = useCallback(() => {
    loginModal.onOpen()
  }, [loginModal])

  return (
    <>
    <RegisterModal />
    <LoginModal />
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center h-screen'>
        <Image
          src={"/images/x.svg"}
          alt="X"
          width={450}
          height={450}
          className="justify-self-center hidden md:block"
        />
        <div className='flex flex-col justify-center md:justify-between gap-6 h-full md:h-[70vh]'>
          <div className='block md:hidden'>
            <Image
              src={"/images/x.svg"}
              alt="X"
              width={50}
              height={50}
            />
          </div>
          <h1 className='text-6xl font-bold'>Happening now!</h1>
          <div className='w-full md:w-[60%]'>
            <h2 className='font-bold text-3xl mb-4'>Join today.</h2>
            <div className='flex flex-col space-y-2'>
              <Button label={
                <div className='flex gap-2 items-center justify-center'>
                  <FcGoogle />
                  Sign-in with Google
                </div>
              } fullWidth secondary />
              <Button label={
                <div className='flex gap-2 items-center justify-center'>
                  <AiFillGithub />
                  Sign-in with Github
                </div>
              } fullWidth secondary />
              <div className="flex items-center justify-center">
                <div className="h-px bg-gray-700 w-1/2"></div>
                <p className='mx-4'>or</p>
                <div className="h-px bg-gray-700 w-1/2"></div>
              </div>
              <Button label="Create an account" fullWidth onClick={onOpenRegisterModal} />
              <div className="text-[10px] text-gray-400">
                By signing up, you agree to the {" "}
                <span className="text-sky-500">Terms of Service</span> and
                <span className="text-sky-500"> Privacy Policy</span>, including
                <span className="text-sky-500"> Cookie Use</span>.
              </div>
            </div>
          </div>
          <div className='w-full md:w-[60%]'>
            <h3 className='font-medium text-xl mb-4'>Already have an account?</h3>
            <Button label="Sign-in" fullWidth outline onClick={onOpenLoginModal} />
          </div>
        </div>
      </div>
    </>
  )
}