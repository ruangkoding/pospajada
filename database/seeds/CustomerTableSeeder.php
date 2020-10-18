<?php

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
class CustomerTableSeeder extends Seeder
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
            DB::table('customer')->insert([
                'customer_name' => $faker->name,
                'customer_address' => $faker->address,
                'hp' => $faker->phoneNumber,
                'created_at' => date('Y-m-d H:i:s')
            ]);
        }
    }
}
