import { Redirect, Slot } from 'expo-router';
import React from 'react';

function _layout() {
  const isAuthenticated = true;
  if(!isAuthenticated) return <Redirect href={"/sign-in"} />
  return <Slot />
}

export default _layout
