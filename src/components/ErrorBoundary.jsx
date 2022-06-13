import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { Component } from 'react';
import { useNavigate } from 'react-router-dom';
class ErrorBoundary extends Component {
    state = { hasError: false };

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }
    goHome = () => {
        this.setState({ hasError: false });
        this.props.goHome();
    };
    render() {
        if (this.state.hasError)
            return (
                <Dialog open={this.state.hasError}>
                    <DialogTitle>에러발생!</DialogTitle>
                    <DialogContent>알 수 없는 에러가 발생했습니다.</DialogContent>
                    <DialogActions>
                        <Button onClick={this.goHome}>확인</Button>
                    </DialogActions>
                </Dialog>
            );
        return this.props.children;
    }
}
export default function ErrorComponent({ children }) {
    const navigate = useNavigate();
    return <ErrorBoundary goHome={() => navigate('/main')}>{children}</ErrorBoundary>;
}
