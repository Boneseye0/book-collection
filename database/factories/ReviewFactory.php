<?php

namespace Database\Factories;

use App\Models\Review;
use App\Models\Book;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Review>
 */
class ReviewFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'reviewer' => $this->faker->word,
            'score' => $this->faker->numberBetween(1, 10),
            'review' => $this->faker->sentence,
            'book_id' => Book::inRandomOrder()->first()->id,
        ];
    }
}
