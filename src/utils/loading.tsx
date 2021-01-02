import styles from './loading.module.scss';
import CircularProgress from '@material-ui/core/CircularProgress';

function Loading() {
    return (
        <div className={styles.loadpage}>
            <CircularProgress />
        </div>
    )
}

export default Loading;