import { connect } from 'react-redux'
import { Notify as Self } from './Notification'
import {
  showNotification
} from '../../store/actions/notification'

const mapStateToProps = ({ notification }) => {
  const { type, message, show } = notification
  return { type, message, show }
}

const mapDispatchToProps = {
  showNotification
}

export const Notify = connect(mapStateToProps, mapDispatchToProps)(Self)