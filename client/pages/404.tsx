import { NextPage } from 'next';
import React from 'react';
import MainLayout from '../layouts/MainLayout';

const NoFound: NextPage = () => {
  return (
    <MainLayout title="404">
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}>
        404 | This page could not be found.
      </div>
    </MainLayout>
  );
};

export default NoFound;
