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
        Schema::table('permissions', function (Blueprint $table) {
            $table->foreignId('hr_id')->constrained('hrs')->restrictOnDelete()->cascadeOnUpdate();
                });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('permissions', function (Blueprint $table) {
                // Drop foreign key first
        $table->dropForeign(['hr_id']);
        // Now drop the column
        $table->dropColumn('hr_id');
        });
    }
};
