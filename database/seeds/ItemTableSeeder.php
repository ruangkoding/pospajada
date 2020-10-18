<?php

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
class ItemTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create('id_ID');
        for ($i = 1; $i <= 50; $i++) {
            DB::table('item')->insert([
                'item_code' => $faker->isbn10,
                'item_name' => 'Item ' . $i,
                'category_id' => $faker->numberBetween(2, 4),
                'unit_id' => $faker->numberBetween(1, 2),
                'stock' => $faker->numberBetween(1, 200),
                'price' => $faker->numberBetween(50000, 500000),
                'created_at' => date('Y-m-d H:i:s')
            ]);
        }
    }
}
