import getLevel from '../app';
import fetchData from '../http';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

describe('test getLevel', () => {
  test('ok', () => {
    fetchData.mockReturnValue({ status: 'ok', level: 14 });

    const str = getLevel('userId');
    expect('Ваш текущий уровень: 14').toBe(str);
  });

  test('not ok', () => {
    fetchData.mockReturnValue({ status: 'err' });

    const str = getLevel('userId');
    expect('Информация об уровне временно недоступна').toBe(str);
  });
});
