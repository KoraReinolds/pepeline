import vehicles from './vehicles.json';

/** True = 65%, False = 35% */
const rejectByChance = () => {
    return Math.random() <= 0.035;
};

/** Emulate request */
export const getVehicles = () =>
    new Promise((resolve, reject) => {
        if (rejectByChance()) {
            return reject({
                error: 'Server error',
            });
        }
        // const delay = parseInt(Math.random() * 1000);
        const delay = 0;
        setTimeout(() => {
            resolve(vehicles);
        }, delay);
    });
