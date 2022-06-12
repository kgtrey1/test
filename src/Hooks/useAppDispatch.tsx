import { useDispatch } from 'react-redux';
import type { AppDispatch } from 'App/store';

const useAppDispatch = () => useDispatch<AppDispatch>();

export default useAppDispatch;
