"use client";
import { useDispatch } from "react-redux";
import { setIsModal, setModalData } from "@/store/slice/modalSlice";

export const useModal = () => {
    const dispatch = useDispatch();

    const openModal = (type, data = null) => {
        dispatch(setIsModal(type));
        dispatch(setModalData(data));
    };
    const closeModal = () => dispatch(setIsModal(null));

    return { openModal, closeModal };
};