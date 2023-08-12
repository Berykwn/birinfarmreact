<?php

namespace App\Http\Controllers;

use App\Models\Jenis_ternak;
use App\Models\Ring;
use App\Models\Ternak;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Resources\TernakCollection;
use Illuminate\Support\Facades\Storage;
use App\Http\Requests\TernakRequest;
use Illuminate\Support\Str;

class TernakController extends Controller
{
    public function ternakPage()
    {
        $ternak = Ternak::with(['jenis_ternak', 'rings'])->latest()->paginate(8);
        $allTernak = Ternak::with(['jenis_ternak', 'rings'])->latest()->get();

        return Inertia::render('Ternak', [
            'title' => 'Ternak',
            'pages' => 'Ternak',
            'ternak' => $ternak,
            'allTernak' => $allTernak,
        ]);
    }

    public function detailTernak(Ternak $ternak, Request $request)
    {
        $getTernakById = $ternak->with(['jenis_ternak', 'rings'])->find($request->id);

        return Inertia::render('DetailTernak', [
            'title' => 'Ternak',
            'pages' => 'Ternak',
            'ternakDetail' => $getTernakById,
        ]);
    }

    public function index()
    {
        $ternak = Ternak::with(['jenis_ternak', 'rings'])->latest()->paginate(6);
        $allTernak = Ternak::with(['jenis_ternak', 'rings'])->latest()->get();

        return Inertia::render('Admin/Ternak/Ternak', [
            'title' => 'Ternak',
            'pages' => 'Ternak',
            'pageUrl' => 'dashboard.ternak',
            'ternak' => $ternak,
            'allTernak' => $allTernak
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Ternak/TambahTernak', [
            'title' => 'Tambah Ternak',
            'pages' => 'Ternak',
            'jenis' => Jenis_ternak::all(),
            'ring' => Ring::all(),
        ]);
    }

    public function store(TernakRequest $request)
    {
        $validatedData = $request->validated();
        $foto = $validatedData['foto'];
        $fotoName = time() . '_' . Str::slug(pathinfo($foto->getClientOriginalName(), PATHINFO_FILENAME)) . '.' . $foto->getClientOriginalExtension();

        if (!$foto->storeAs('img/ternaks/', $fotoName)) {
            return redirect()->back()->with('error', 'Terjadi kesalahan saat mengupload foto.');
        }

        Ternak::create(array_merge($validatedData, ['foto' => $fotoName]));

        return redirect()->route('dashboard.ternak')->with('message', 'Data ternak berhasil ditambahkan.');
    }

    public function show(Ternak $ternak, Request $request)
    {
        $ternaks = $ternak->with(['jenis_ternak', 'rings'])->find($request->id);

        return Inertia::render('Admin/Ternak/DetailTernak', [
            'ternak' => $ternaks,
            'pages' => 'Ternak',
            'title' => 'Detail Ternak',
        ]);
    }

    public function edit(Ternak $ternak, Request $request)
    {
        $getTernakById = $ternak->with(['jenis_ternak', 'rings'])->find($request->id);

        return Inertia::render('Admin/Ternak/EditTernak', [
            'title' => 'Edit Ternak',
            'pages' => 'Ternak',
            'ternak' => $getTernakById,
            'jenis' => Jenis_ternak::all(),
            'ring' => Ring::all(),
        ]);
    }

    public function update(TernakRequest $request, Ternak $ternak, $id)
    {
        $existingTernak = Ternak::findOrFail($id);

        $validatedData = $request->validated();
        $fotoName = $existingTernak->foto; // Preserve the existing foto name if no new foto is uploaded

        if ($request->hasFile('foto')) {
            $foto = $validatedData['foto'];
            $fotoName = time() . '_' . Str::slug(pathinfo($foto->getClientOriginalName(), PATHINFO_FILENAME)) . '.' . $foto->getClientOriginalExtension();

            if (!$foto->storeAs('img/ternaks/', $fotoName)) {
                return redirect()->back()->with('error', 'Terjadi kesalahan saat mengupload foto.');
            }
        }

        $existingTernak->update(array_merge($validatedData, ['foto' => $fotoName]));

        return redirect()->route('dashboard.ternak')->with('message', 'Data berita berhasil diupdate.');
    }

    public function destroy(Ternak $ternak, Request $request)
    {
        $ternak = Ternak::find($request->id);
        //cek apakah di storage ada foto
        if (Storage::exists('img/ternaks' . $ternak->foto)) {
            Storage::delete('img/ternaks' . $ternak->foto);
        }

        $ternak->delete();

        return redirect()->route('dashboard.ternak')->with('message', 'Data ternak berhasil dihapus!');
    }
}