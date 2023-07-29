<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PemesananRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    { 
        return [
            'id_ternak' => 'required',
            'jumlah_jantan' => 'required|integer|min:0',
            'jumlah_betina' => 'required|integer|min:0',
            'id_users' => 'required',
            'kontak' => 'required|string',
            'alamat' => 'required|string',
            'catatan' => 'nullable|string',
            'status' => 'required|string',
        ];
    }

    public function messages()
    {
        return [
            'id_ternak.required' => 'Silahkan pilih produk terlebih dahulu!',
            'jumlah_jantan.required' => 'Jumlah jantan harus diisi!',
            'jumlah_jantan.integer' => 'Input harus menggunakan angka.',
            'jumlah_jantan.min' => 'Jumlah jantan minimal 0.',
            'jumlah_betina.required' => 'Jumlah betina harus diisi!',
            'jumlah_betina.integer' => 'Input harus menggunakan angka.',
            'jumlah_betina.min' => 'Jumlah betina minimal 0.',
        ];
    }
}