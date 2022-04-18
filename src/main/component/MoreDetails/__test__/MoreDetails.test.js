/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/render-result-naming-convention */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable global-require */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */
import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
// import { rest } from 'msw';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
// import { renderHook } from '@testing-library/react-hooks';
// // import { createMemoryHistory } from 'history';
// import { wait } from '@testing-library/user-event/dist/utils';
// import nock from 'nock';
import MoreDetails from '../MoreDetails';
// // import useLaunch from '../../../service/useLaunch';
// import { mockLaunch } from '../../../../mocks/mockLaunches';
// import { server } from '../../../../setupTests';

const MockMoreDetails = function () {
  return (
    <BrowserRouter>
      <MoreDetails />
    </BrowserRouter>
  );
};

describe('tests for fetching data in components', () => {
  test('if render loading', async () => {
    const queryClient = new QueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <MockMoreDetails />
      </QueryClientProvider>
    );
    await waitFor(() => {
      expect(screen.getByText('Loading...')).toBeInTheDocument();
    });
  });
});

// test('test if component render', async () => {
//   const queryClient = new QueryClient();
//   const wrapper = ({ children }) => (
//     <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
//   );
//   const example = nock('https://api.spacexdata.com/v3/')
//     .get(`${process.env.REACT_APP_BASE_URL}launches?flight_number=1`)
//     .reply(200, {
//       answer: {
//         mockLaunch,
//       },
//     });
//   const { result, waitFor } = renderHook(() => useLaunch(), { wrapper });
//   await waitFor(() => {
//     return result.current.isSuccess;
//   });
//   expect(result.current.data).toEqual({ answer: mockLaunch });
// });
// test('if render name of launch', async () => {
//   const queryClient = new QueryClient();
//   render(
//     <QueryClientProvider client={queryClient}>
//       <MockMoreDetails />
//     </QueryClientProvider>
//   );

//   await waitFor(() => {
//     expect(
//       screen.getByText('No description for this launch').toBeInTheDocument()
//     );
//   });
// });

// test('if component fetch data', async () => {
//   renderWithClient(<MockMoreDetails />);

//   // while component is loading

//   const loadingEl = screen.getByText(/loading.../i);
//   expect(loadingEl).toBeInTheDocument();

//   // const srcElement = screen.getByAltText(/launch/i);
//   // expect(srcElement.src).toContain(
//   //   'https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png'
//   // );
//   const nameElement = screen.getByText(/rocket/i);
//   expect(nameElement).toBeInTheDocument();
// });

// test('if the data fetch fails, show the error message', async () => {
//   server.use(
//     rest.get('https://api.spacexdata.com/v3/launches/:id', (req, res, ctg) => {
//       return res(ctx.status(404));
//     })
//   );
//   const { result, waitFor } = renderHook(() => useLaunch(), {
//     wrapper,
//   });

//   await waitFor(() => result.current.isError);

//   expect(result.current.error).toBeDefined();
// });

/** 
describe('query hook useLaunch', () => {
  test('successful query hook useLaunch', async () => {
    const { result, waitFor } = renderHook(() => useLaunch(), {
      wrapper,
    });

    await waitFor(() => result.current.isSuccess);

    expect(result.current.data?.launch).toBe('mocked-react-query');
  });

 
*/

// const history = createMemoryHistory();
// test('goes back on back button', async () => {
//   render(
//     <Router history={history}>
//       <MemoryRouter initialEntries={['/3']}>
//         <Route path="/:id">
//           <MockMoreDetails />
//         </Route>
//       </MemoryRouter>
//     </Router>
//   );
//   const backButton = await screen.findByText(/back/i);
//   fireEvent.click(backButton);
//   expect(history.location.pathname).toBe('/Alllaunches');
// });
