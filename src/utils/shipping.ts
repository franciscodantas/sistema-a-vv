import { LocationCity } from '../clients/LocationClient';

const SHIPPING_COST_BY_KILOMETER = 1 / 50; // R$ 1,00 a cada 50 km de distância
const SHIPPING_COST_BY_KILOGRAM = 1 / 0.5; // R$ 1,00 a cada 500 g de peso
const SHIPPING_COST_BY_LITER = 1 / 1; // R$ 1,00 a cada 1 L de volume

/**
 * Calcula o custo em reais de frete entre duas cidades.
 *
 * Se ambas as cidades estiverem no mesmo estado, o custo é zero.
 *
 * Se as cidades estiverem em estados diferentes, o custo em centavos é
 * calculado com base na distância entre as cidades e no peso e volume do
 * produto.
 */
export function calculateShippingCost(
  originCity: LocationCity,
  destinationCity: LocationCity,
  distanceInKilometers: number,
  weightInKilograms: number,
  volumeInLiters: number,
) {
  const haveSameState =
    originCity.stateCode === destinationCity.stateCode &&
    originCity.countryCode === destinationCity.countryCode;

  if (haveSameState) {
    return 0;
  }

  const cost =
    distanceInKilometers * SHIPPING_COST_BY_KILOMETER +
    weightInKilograms * SHIPPING_COST_BY_KILOGRAM +
    volumeInLiters * SHIPPING_COST_BY_LITER;

  return cost;
}
