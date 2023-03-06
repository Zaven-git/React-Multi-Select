import { connect } from 'react-redux'


import { Container as Self } from './Container'
import { getTree,addTree,editTree,removeTree } from '../../store/actions/tree'

const mapDispatchToProps = {
  addTree,
  editTree,
  getTree,
  removeTree
}

export const Container = connect(null, mapDispatchToProps)(Self)