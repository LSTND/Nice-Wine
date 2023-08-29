/* eslint-disable import/no-extraneous-dependencies */
import { createAction } from '@reduxjs/toolkit'

const actionAddToCart = createAction('cart/actionAddToCart')

const actionReadyCart = createAction('cart/actionReadyCart')

const actionRemoveCart = createAction('cart/actionRemoveCart')

const actionRemoveLocalStorage = createAction('cart/actionRemoveLocalStorage')

const actionClearCart = createAction('cart/actionClearCart')

export { actionAddToCart, actionReadyCart, actionRemoveCart, actionRemoveLocalStorage, actionClearCart }
