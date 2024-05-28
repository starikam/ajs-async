import getData from '../app';

test('app no error', async () => {
  const save = await getData(false);
  expect(save).toEqual('{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}');
});

test('app error', async () => {
  try {
    await getData(true);
  } catch (error) {
    expect(error).toEqual(new Error('Ошибка! Нет данных!'));
  }
});
