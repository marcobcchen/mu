import React, { useState, useEffect } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

//CSS
const CustomDialog = withStyles({
	root: {
		'& .MuiDialog-container .MuiPaper-root': {
			width: '70%',
			borderRadius: '10px',
			marginBottom: '33vh'
		}
	}
})(Dialog)

const CustomDialogTitle = withStyles({
  root: {
    textAlign: 'center',
		padding: '5px 0',
    '& .MuiTypography-h6': {
			fontSize: '1.2rem',
			color: 'black'
    }
  },
})(DialogTitle)

const CustomDialogContent = withStyles({
	root: {
		padding: '15px 10px',
		textAlign: 'center',
		backgroundColor: '#f4f7ff'
	}
})(DialogContent)

const CustomDialogContentText = withStyles({
	root: {
		marginBottom: '0',
		fontSize: '.9rem',
		color: 'black'
	}
})(DialogContentText)

const CustomDialogActions = withStyles({
	root: {
		height: '40px',
		padding: '0 7px',
		marginBottom: '8px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#f4f7ff'
	}
})(DialogActions)

const CustomButton = withStyles({
	root: {
		width: '100%',
		height: '100%',
		background: 'linear-gradient(90deg,#4e8cff,#2472ff)',
		color: 'white',
		fontSize: '1rem'
	}
})(Button)

// interface
interface AlertDialogObject {
  open: boolean;
	dialogClose: () => void;
	title: string;
	content: string;
	agreeTxt?: string;
	disagreeTxt?: string;
	children?: any
}

const AlertDialog: React.FC<AlertDialogObject> = (props: any) => {
  return (
    <CustomDialog
			open={props.open}
			onClose={props.dialogClose}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
			fullWidth={true}
    >
			<CustomDialogTitle id="alert-dialog-title">{props.title}</CustomDialogTitle>
			<CustomDialogContent>
				<CustomDialogContentText id="alert-dialog-description">{props.content}</CustomDialogContentText>
			</CustomDialogContent>
			<CustomDialogActions>
				{
					props.agreeTxt &&
					<CustomButton onClick={props.dialogClose} color="primary">{props.agreeTxt}</CustomButton>
				}
				{
					props.disagreeTxt &&
					<Button onClick={props.dialogClose} color="primary">{props.disagreeTxt}</Button>
				}
			</CustomDialogActions>
    </CustomDialog>
  )
}

export default AlertDialog
