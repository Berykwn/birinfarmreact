<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TernakRequest extends FormRequest
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
            'id_jenis' => 'required',
            'id_ring' => 'required',
            'nama' => 'required',
            'jumlah_jantan' => 'required',
            'jumlah_betina' => 'required',
            'foto' => 'required|file|max:2048',
            'deskripsi' => 'required',
            'kode_ternak' => 'required',
        ];
    }

    public function messages()
    {
        return [
            'id_jenis.required' => 'jenis harus diisi',
            'nama.required' => 'nama harus diisi',
        ];
    }
}