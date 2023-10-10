import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../utils/api';

const initialState = {
  shopsData: null,
  categoriesData: null,
  salesData: null,
  forecastData: null,
  dataIsLoading: false,
  dataLoadingSucces: false,
  dataLoadingError: null,
};

const getShops = createAsyncThunk('data/getShops', async () => {
  try {
    return api.getShops();
  } catch (err) {
    return err;
  }
});
const getCategories = createAsyncThunk('data/getCategories', async () => {
  try {
    return api.getCategories();
  } catch (err) {
    return err;
  }
});

const getSales = createAsyncThunk('data/getSales', async () => {
  try {
    return api.getSales();
  } catch (err) {
    return err;
  }
});
const postForecast = createAsyncThunk('data/postForecast', async (data) => {
  try {
    return api.postForecast(data);
  } catch (err) {
    return err;
  }
});

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getShops.fulfilled, (state, action) => {
      state.shopsData = action.payload;
    });
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.categoriesData = action.payload;
    });
    builder.addCase(getSales.fulfilled, (state, action) => {
      state.salesData = action.payload;
    });
    builder.addCase(postForecast.fulfilled, (state, action) => {
      state.forecastData = action.payload;
    });
    // For a local demonstration of the product. The format of the received data is determined by the backend development //////////////////////////
    builder.addCase(getShops.rejected, (state, action) => {
      state.shopsData = [
        {
          id: '1',
          store: '123',
          city: 'СПб',
          division: '1',
          type_format: 'econom',
          loc: 'Уральская ул., 32,',
          size: 'L',
          is_active: true,
        },
        {
          id: '2',
          store: '456',
          city: 'Мск',
          division: '2',
          type_format: 'premium',
          loc: 'Пушкина ул., 5,',
          size: 'S',
          is_active: false,
        },
      ];
    });
    builder.addCase(getCategories.rejected, (state, action) => {
      state.categoriesData = [
        {
          group: [
            'Салаты и закуски',
            'Выпечка',
            'Горячие блюда',
            'Соленья и маринады',
            'Заготовки для кулинарии',
          ],
          category: [
            'Хлеб',
            'Хлеб мелокоштучный',
            'Национальная выпечка',
            'Сезонные товары',
            'Пироги',
            'Экологичные Хлеб',
            'Низкокалорийный Хлеб',
            'Сухари',
            'Батоны',
          ],
          subcategory: [
            'Булочки сладкие с начинкой',
            'Булочки сытные с начинкой',
            'Булочки без начинки',
            'Булочки слоеные и круассаны',
            'Кексы',
            'Блинчики сладкие с начинкой',
            'Блинчики сытные с начинкой',
            'Блинчики без начинки',
          ],
          sku: [
            'Булочка с корицей',
            'Булочка с маком',
            'Булочка с повидлом яблочным',
            'Булочка с вареной сгущенкой',
            'Булочка с персиком и сливочным кремом',
            'Свежая булочка с корицей',
            'Свежая булочка с маком',
            'Свежая булочка с повидлом яблочным',
            'Свежая булочка с вареной сгущенкой',
            'Свежая булочка с персиком и сливочным кремом',
          ],
        },
      ];
    });
  },
});
// const { setCurrentAuth } = dataSlice.actions;
const dataSliceReducer = dataSlice.reducer;

export {
  dataSliceReducer, getShops, getCategories, getSales, postForecast,
};
