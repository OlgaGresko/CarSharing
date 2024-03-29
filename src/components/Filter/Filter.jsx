import css from './Filter.module.css';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAllMakes } from '../../redux/operations';
import { selectCarsAdverts, selectMakesMakes } from '../../redux/selectors';
import { extractPrice } from '../../helpers';
import { setFilteredAdverts } from '../../redux/carsSlice';
import { SelectMake } from '../SelectMake/SelectMake';
import { SelectPrice } from '../SelectPrice/SelectPrice';

export const Filter = () => {
  const dispatch = useDispatch();
  const makes = useSelector(selectMakesMakes);
  const cars = useSelector(selectCarsAdverts);

  let filteredCars;
  const [selectedMake, setSelectedMake] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [mileageFrom, setMileageFrom] = useState('');
  const [mileageTo, setMileageTo] = useState('');
  const [isWarningShown, setIsWarningShown] = useState(false);

  const formatMileage = (value) => {
    const cleanedValue = value.toString().replace(/,/g, '');
    const formattedValue = cleanedValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return formattedValue;
  };

  const handleSelectMakeChange = (selectedOption) => {
    const selectedValue = selectedOption.value;
    setSelectedMake(selectedValue);
  };

  const handleSelectPriceChange = (selectedOption) => {
    const selectedValue = selectedOption.value;
    setSelectedPrice(selectedValue);
  };

  const handleInputFromChange = (event) => {
    const { value } = event.target;
    setMileageFrom(value);
  };

  const handleInputToChange = (event) => {
    const { value } = event.target;
    setMileageTo(value);
  };

  const formattedMakes = makes.map((make) => ({ label: make, value: make }));
  const formattedPrices = [];
  for (let i = 30; i <= 500; i += 10) {
    formattedPrices.push({ label: `${i}`, value: i });
  }

  useEffect(() => {
    dispatch(getAllMakes());
  }, [dispatch]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const filters = {
      selectedMake,
      selectedPrice,
      mileageFrom,
      mileageTo,
    };

    const filterCars = (cars, filters) => {
      if (mileageTo && mileageFrom > mileageTo) {
        setIsWarningShown(true);
        setTimeout(() => {
          setIsWarningShown(false);
        }, 1500);
        return;
      }

      let filteredCars = cars;

      if (filters.selectedMake) {
        if (filters.selectedMake === 'All') {
          filteredCars = cars;
        } else {
          filteredCars = filteredCars.filter(
            (car) => car.make === filters.selectedMake
          );
        }
      }

      if (filters.selectedPrice) {
        filteredCars = filteredCars.filter(
          (car) =>
            parseInt(extractPrice(car.rentalPrice)) <=
            parseInt(filters.selectedPrice)
        );
      }

      if (filters.mileageFrom) {
        filteredCars = filteredCars.filter(
          (car) => car.mileage >= filters.mileageFrom
        );
      }

      if (filters.mileageTo) {
        filteredCars = filteredCars.filter(
          (car) => car.mileage <= filters.mileageTo
        );
      }

      return filteredCars;
    };

    filteredCars = filterCars(cars, filters);

    dispatch(setFilteredAdverts(filteredCars));
  };

  return (
    <form className={css.container} onSubmit={handleSubmit}>
      <label className={css.label}>
        Car brand
        <SelectMake
          formattedMakes={formattedMakes}
          handleSelectMakeChange={handleSelectMakeChange}
        />
      </label>

      <label className={css.label}>
        Price/ 1 hour
        <SelectPrice
          formattedPrices={formattedPrices}
          handleSelectPriceChange={handleSelectPriceChange}
        />
      </label>

      <div className={css.mileage}>
        <label className={css.label} htmlFor="mileageFrom">
          Car mileage / km
          <div className={css.input_wrapper_l}>
            <span className={css.input_span}>From</span>
            <input
              className={css.input}
              type="text"
              name="mileageFrom"
              value={formatMileage(mileageFrom)}
              id="mileageFrom"
              onChange={handleInputFromChange}
            />
          </div>
        </label>
        <label htmlFor="mileageTo" className={css.label_h}>
          {' '}
          mileageTo
          <div className={css.input_wrapper_r}>
            <span className={css.input_span}>To</span>
            <input
              className={css.input}
              type="text"
              name="mileageTo"
              value={formatMileage(mileageTo)}
              id="mileageTo"
              onChange={handleInputToChange}
            />
          </div>
        </label>
        {isWarningShown && (
          <span className={css.warning}>
            Value From must be less than value To
          </span>
        )}
      </div>

      <button className={css.button} type="submit">
        Search
      </button>
    </form>
  );
};
