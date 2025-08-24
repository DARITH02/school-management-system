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
        Schema::table('hr', function (Blueprint $table) {
            $table->string('hr_name');
            $table->string('hr_contact');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('hr', function (Blueprint $table) {
            $table->dropColumn(['hr_name','hr_contact']);
        });
    }
};
