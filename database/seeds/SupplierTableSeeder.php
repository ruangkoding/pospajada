<?php

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
class SupplierTableSeeder extends Seeder
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
            DB::table('supplier')->insert([
                'supplier_name' => $faker->name,
                'supplier_address' => $faker->address,
                'supplier_contact' => $faker->phoneNumber,
                'created_at' => date('Y-m-d H:i:s')
            ]);
        }
    }
}
