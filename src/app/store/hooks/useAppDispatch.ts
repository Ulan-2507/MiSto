import { useDispatch } from 'react-redux';
import { AppDispatch } from '../types/StateSchema';

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
