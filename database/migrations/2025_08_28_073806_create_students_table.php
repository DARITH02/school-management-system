<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('students', function (Blueprint $table) {
            $table->id();
            $table->foreignId("permission_id")->constrained("permissions")->restrictOnDelete()->cascadeOnUpdate();
            $table->foreignId("teacher_id")->constrained("teachers")->restrictOnDelete()->cascadeOnUpdate();
            $table->foreignId("parent_id")->constrained("parents")->restrictOnDelete()->cascadeOnUpdate();
            $table->string("full_name");
            $table->string("gender", 10);
            $table->dateTime("Registration_date");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('students');
    }
};
