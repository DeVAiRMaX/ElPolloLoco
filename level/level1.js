let level1;

/**
 * Initializes the first level by creating a new Level object with the corresponding
 * enemies, coins, bottles, clouds, and background objects.
 * The enemies are a chicken, a small chicken, and an Endboss.
 * The coins are placed at x coordinates 400, 475, 575, 675, 750, 1200, 1275, 1375, 1475, and 1550.
 * The bottles are placed at x coordinates 350.
 * The clouds are placed at x coordinates -719, 0, 719, 719*2, and 719*3.
 * The background objects are placed at x coordinates -719, 0, 719, 719*2, and 719*3.
 */
function initLevel() {

    const chickenSpacing = (1800 - 300) / (5 + 2);

    level1 = new Level(
        [
            // new chicken(),
            // new Smallchicken(),
            // new chicken(),
            // new Smallchicken(),
            // new chicken(),
            // new Smallchicken(),
            // new chicken(),
            // new Smallchicken(),
            // new chicken(),
            new Endboss()
        ],
        [
            new Coin('img/8_coin/coin_1.png', 400, 250),
            new Coin('img/8_coin/coin_1.png', 475, 200),
            new Coin('img/8_coin/coin_1.png', 575, 170),
            new Coin('img/8_coin/coin_1.png', 675, 200),
            new Coin('img/8_coin/coin_1.png', 750, 250),
            new Coin('img/8_coin/coin_1.png', 1200, 250),
            new Coin('img/8_coin/coin_1.png', 1275, 200),
            new Coin('img/8_coin/coin_1.png', 1375, 170),
            new Coin('img/8_coin/coin_1.png', 1475, 200),
            new Coin('img/8_coin/coin_1.png', 1550, 250)
        ],
        [
            new Bottle('img/6_salsa_bottle/1_salsa_bottle_on_ground.png', 350),
            new Bottle('img/6_salsa_bottle/salsa_bottle.png', 350),
            new Bottle('img/6_salsa_bottle/1_salsa_bottle_on_ground.png', 350),
            new Bottle('img/6_salsa_bottle/salsa_bottle.png', 350),
            new Bottle('img/6_salsa_bottle/2_salsa_bottle_on_ground.png', 350),
            new Bottle('img/6_salsa_bottle/1_salsa_bottle_on_ground.png', 350),
            new Bottle('img/6_salsa_bottle/salsa_bottle.png', 350),
            new Bottle('img/6_salsa_bottle/1_salsa_bottle_on_ground.png', 350),
            new Bottle('img/6_salsa_bottle/salsa_bottle.png', 350),
            new Bottle('img/6_salsa_bottle/2_salsa_bottle_on_ground.png', 350),
        ],
        [
            new clouds('img/5_background/layers/4_clouds/1.png'),
            new clouds('img/5_background/layers/4_clouds/2.png'),
            new clouds('img/5_background/layers/4_clouds/1.png'),
            new clouds('img/5_background/layers/4_clouds/2.png'),
            new clouds('img/5_background/layers/4_clouds/1.png'),
            new clouds('img/5_background/layers/4_clouds/2.png'),
            new clouds('img/5_background/layers/4_clouds/1.png'),
            new clouds('img/5_background/layers/4_clouds/2.png'),
            new clouds('img/5_background/layers/4_clouds/1.png'),
            new clouds('img/5_background/layers/4_clouds/2.png'),
            new clouds('img/5_background/layers/4_clouds/1.png'),

            

        ],
        [
            new backgroundObject('img/5_background/layers/air.png', -719),
            new backgroundObject('img/5_background/layers/3_third_layer/2.png', -719),
            new backgroundObject('img/5_background/layers/2_second_layer/2.png', -719),
            new backgroundObject('img/5_background/layers/1_first_layer/2.png', -719),

            new backgroundObject('img/5_background/layers/air.png', 0),
            new backgroundObject('img/5_background/layers/3_third_layer/1.png', 0),
            new backgroundObject('img/5_background/layers/2_second_layer/1.png', 0),
            new backgroundObject('img/5_background/layers/1_first_layer/1.png', 0),

            new backgroundObject('img/5_background/layers/air.png', 719),
            new backgroundObject('img/5_background/layers/3_third_layer/2.png', 719),
            new backgroundObject('img/5_background/layers/2_second_layer/2.png', 719),
            new backgroundObject('img/5_background/layers/1_first_layer/2.png', 719),

            new backgroundObject('img/5_background/layers/air.png', 719 * 2),
            new backgroundObject('img/5_background/layers/3_third_layer/1.png', 719 * 2),
            new backgroundObject('img/5_background/layers/2_second_layer/1.png', 719 * 2),
            new backgroundObject('img/5_background/layers/1_first_layer/1.png', 719 * 2),

            new backgroundObject('img/5_background/layers/air.png', 719 * 3),
            new backgroundObject('img/5_background/layers/3_third_layer/2.png', 719 * 3),
            new backgroundObject('img/5_background/layers/2_second_layer/2.png', 719 * 3),
            new backgroundObject('img/5_background/layers/1_first_layer/2.png', 719 * 3),
        ]
    );
}