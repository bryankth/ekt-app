import React from 'react'
import { ButtonAdd } from '../components/buttonAdd'
import { ModalCreate } from '../components/ModalCreate'
import { Navbar } from '../components/Navbar'
import { TableList } from '../components/TableList'

export const Ektpages = () => {
  return (
    <>
    <Navbar />
    <TableList />

    <ModalCreate />
    </>
  )
}
